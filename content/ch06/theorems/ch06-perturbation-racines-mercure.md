---
id: ch06-perturbation-racines-mercure
type: proposition
chapter: 6
title: Perturbation des racines d'un polynôme et intégrale elliptique (périhélie de Mercure)
ref: Exercice VI.4.3
page: 122
importance: 2
depends: [ch06-fonctions-implicites, ch05-taylor-reste-integral, ch05-taylor-lagrange]
tags: [fonctions implicites, racines simples, perturbation, développement limité, intégrale elliptique, Mercure, relativité]
---
## Intuition

> 💡 Une **racine simple** d'un polynôme (où la courbe traverse l'axe avec une pente non nulle) bouge **gentiment** quand on perturbe un peu les coefficients : elle dépend de façon $C^\infty$ du paramètre. C'est exactement le théorème des fonctions implicites ([[ch06-fonctions-implicites]]) appliqué à $(\eps,x)\mapsto P_\eps(x)$, et la dérivée de la racine se calcule par $x'(0)=-\partial_\eps P/\partial_xP$.

Ici on ajoute à la parabole $(x-a)(b-x)$ un petit terme cubique $\eps x^3$ : les deux racines $a$, $b$ se déplacent un peu, et une troisième racine surgit de l'infini (vers $1/\eps$). L'enjeu physique ([[ch06-perihelie-mercure-remarque]]) : l'intégrale $I(\eps)=\int dx/\sqrt{P_\eps}$ est l'angle balayé par une planète entre aphélie et périhélie. En mécanique newtonienne ($\eps=0$) elle vaut exactement $\pi$ et l'orbite se referme ; la correction de la relativité générale ($\eps\gt0$) la fait dépasser $\pi$ : le périhélie avance.

Notation : $O(\eps^2)$ désigne une quantité bornée par $c\,\eps^2$ pour $\eps$ assez petit.

## Énoncé

**Proposition (poly, Exercice VI.4.3 : Perturbation des racines et périhélie de Mercure, p. 122).** Soient $a$ et $b$ deux réels vérifiant $a\lt b$, et pour $\eps\in\R$ posons
$$
P_\eps(x)=(x-a)(b-x)+\eps x^3 .
$$
1. Pour $\eps\gt0$ assez petit, $P_\eps$ admet trois racines réelles distinctes $x_a(\eps)\lt x_b(\eps)\lt x_c(\eps)$ ; $\eps\mapsto x_a(\eps)$ et $\eps\mapsto x_b(\eps)$ sont de classe $C^\infty$ au voisinage de $0$ avec $x_a(0)=a$ et $x_b(0)=b$, et $x_c(\eps)\sim1/\eps$ lorsque $\eps\to0^+$.
2. Développements limités à l'ordre $1$ en $0$ :
$$
x_a(\eps)=a-\frac{a^3}{b-a}\,\eps+O(\eps^2),\qquad x_b(\eps)=b+\frac{b^3}{b-a}\,\eps+O(\eps^2).
$$
En particulier, si $0\lt a\lt b$, les racines perturbées s'écartent : $x_a(\eps)\lt a$ et $x_b(\eps)\gt b$ pour $\eps\gt0$ petit.
3. $P_\eps(x)=\big(x-x_a(\eps)\big)\big(x_b(\eps)-x\big)\big(1-\eps(x+x_a(\eps)+x_b(\eps))\big)$, $P_\eps\gt0$ sur $]x_a(\eps);x_b(\eps)[$, et l'intégrale elliptique
$$
I(\eps)=\int_{x_a(\eps)}^{x_b(\eps)}\frac{dx}{\sqrt{P_\eps(x)}}
$$
est bien définie, $P_\eps$ ne s'annulant qu'à l'ordre $1$ aux deux bornes.
4. Le changement de variable $x=u+v\sin t$, où $u=\frac12\big(x_a(\eps)+x_b(\eps)\big)$ et $v=\frac12\big(x_b(\eps)-x_a(\eps)\big)$, donne $I(\eps)=\displaystyle\int_{-\pi/2}^{\pi/2}\big(1-\eps(3u+v\sin t)\big)^{-1/2}dt$, et
$$
I(\eps)=\pi+\frac{3\pi(a+b)}{4}\,\eps+O(\eps^2).
$$

## Hypothèses

### H1 — $a\lt b$ : racines simples de $P_0$

**Rôle.** $\partial_xP_0(a)=b-a\ne0$ et $\partial_xP_0(b)=a-b\ne0$ : c'est l'hypothèse « différentielle partielle inversible » des fonctions implicites.

**Si on la retire.** Pour $a=b\ne0$, $P_\eps(x)=-(x-a)^2+\eps x^3$ et $a$ est racine double de $P_0$. Il n'existe **aucune** fonction $x(\eps)$ de classe $C^1$ sur $[0,\eta[$ avec $x(0)=a$ et $P_\eps(x(\eps))=0$ : sinon $|x(\eps)-a|\le c\,\eps$, donc $(x(\eps)-a)^2=O(\eps^2)$, alors que $\eps\,x(\eps)^3\sim a^3\eps$, et l'égalité $(x(\eps)-a)^2=\eps x(\eps)^3$ est impossible pour $\eps\gt0$ petit. En fait (pour $a\gt0$) les racines proches de $a$ sont $x\approx a\pm a^{3/2}\sqrt\eps$ : elles bougent comme $\sqrt\eps$, et pour $\eps\lt0$ il n'y en a plus.

### H2 — $\eps\gt0$ petit

**Rôle.** Petit : pour rester dans les voisinages donnés par les fonctions implicites et pour que le facteur $1-\eps(x+x_a+x_b)$ reste $\gt0$ ; positif : pour l'ordre $x_b\lt x_c$ (pour $\eps\lt0$ petit, la troisième racine part vers $-\infty$).

**Si on la retire.** Pour $a=1$, $b=2$, $\eps=1$ : $P_1(x)=x^3-x^2+3x-2$ a pour dérivée $3x^2-2x+3$, de discriminant $4-36\lt0$, donc $P_1$ est strictement croissant et n'a **qu'une** racine réelle ($\approx0{,}715$).

## Idée de la preuve

Fonctions implicites en $(0,a)$ et $(0,b)$ pour les deux racines proches ; la somme des racines vaut $1/\eps$, ce qui donne la troisième et la factorisation. Le changement de variable $x=u+v\sin t$ transforme $(x-x_a)(x_b-x)$ en $v^2\cos^2t$ ; Taylor pour $(1-s)^{-1/2}$, uniformément en $t$, donne le développement.

## Preuve

**1.** Soit $F(\eps,x)=P_\eps(x)=\eps x^3-x^2+(a+b)x-ab$, polynomiale donc $C^\infty$ sur $\R^2$. On a $F(0,a)=0$ et $\partial_xF(0,x)=(b-x)-(x-a)$, d'où $\partial_xF(0,a)=b-a\ne0$. Par le théorème des fonctions implicites ([[ch06-fonctions-implicites]]), il existe $\eta\gt0$, $\rho\gt0$ et $x_a:\,]-\eta,\eta[\to\,]a-\rho,a+\rho[$ de classe $C^\infty$ avec $x_a(0)=a$ et : pour $|\eps|\lt\eta$ et $|x-a|\lt\rho$, $F(\eps,x)=0\iff x=x_a(\eps)$. De même en $(0,b)$, où $\partial_xF(0,b)=a-b\ne0$, avec $x_b$. Quitte à réduire, on prend le même $\eta$ et $\rho\lt\frac{b-a}2$, de sorte que $x_a(\eps)\lt a+\rho\lt b-\rho\lt x_b(\eps)$.

Soit $0\lt\eps\lt\eta$. $P_\eps$ est un polynôme de degré $3$ de coefficient dominant $\eps$, ayant les deux racines distinctes $x_a(\eps)$, $x_b(\eps)$ : il existe $w\in\C$ avec $P_\eps(x)=\eps(x-x_a)(x-x_b)(x-w)$. En identifiant les coefficients de $x^2$ : $-\eps(x_a+x_b+w)=-1$, donc
$$
x_c(\eps):=w=\frac1\eps-x_a(\eps)-x_b(\eps)\in\R .
$$
Comme $x_a+x_b$ reste borné, $\eps\,x_c(\eps)=1-\eps(x_a+x_b)\to1$ : $x_c(\eps)\sim1/\eps$, et en particulier $x_c(\eps)\gt x_b(\eps)$ pour $\eps$ petit. Les trois racines sont réelles et distinctes.

**2.** En dérivant $F(\eps,x_a(\eps))=0$ en $\eps=0$ : $\partial_\eps F(0,a)+\partial_xF(0,a)\,x_a'(0)=0$, avec $\partial_\eps F(\eps,x)=x^3$. Donc $x_a'(0)=-\dfrac{a^3}{b-a}$ et de même $x_b'(0)=-\dfrac{b^3}{a-b}=\dfrac{b^3}{b-a}$. Comme $x_a$, $x_b$ sont $C^2$, la formule de Taylor à l'ordre $1$ avec reste ([[ch05-taylor-lagrange]]) donne les développements annoncés avec un reste $O(\eps^2)$. Si $0\lt a\lt b$, $x_a'(0)\lt0\lt x_b'(0)$, d'où $x_a(\eps)\lt a$ et $x_b(\eps)\gt b$ pour $\eps\gt0$ petit.

**3.** D'après 1, $P_\eps(x)=\eps(x-x_a)(x-x_b)(x-x_c)$ et $\eps(x-x_c)=\eps x-1+\eps(x_a+x_b)=-\big(1-\eps(x+x_a+x_b)\big)$, d'où
$$
P_\eps(x)=(x-x_a)(x_b-x)\big(1-\eps(x+x_a+x_b)\big).
$$
Pour $x\in[x_a,x_b]\subset[a-\rho,b+\rho]$, $|x+x_a+x_b|\le3L$ avec $L=\max(|a-\rho|,|b+\rho|)$ ; pour $\eps\lt1/(3L)$, le dernier facteur est $\gt0$, et $(x-x_a)(x_b-x)\gt0$ sur $]x_a,x_b[$ : $P_\eps\gt0$. Près de $x_a$, $P_\eps(x)=(x-x_a)\,c(x)$ avec $c$ continue et $c(x_a)=(x_b-x_a)(1-\eps(2x_a+x_b))\gt0$, donc $1/\sqrt{P_\eps(x)}\le c'/\sqrt{x-x_a}$, intégrable ; de même en $x_b$. L'intégrale $I(\eps)$ converge.

**4.** L'application $t\mapsto u+v\sin t$ est une bijection $C^1$ croissante de $]-\frac\pi2,\frac\pi2[$ sur $]x_a,x_b[$ (car $u-v=x_a$, $u+v=x_b$, $v\gt0$). On a $x-x_a=v(1+\sin t)$, $x_b-x=v(1-\sin t)$, donc $(x-x_a)(x_b-x)=v^2\cos^2t$, puis $x+x_a+x_b=3u+v\sin t$ et $dx=v\cos t\,dt$. Comme $\cos t\gt0$,
$$
I(\eps)=\int_{-\pi/2}^{\pi/2}\frac{v\cos t\,dt}{v\cos t\,\sqrt{1-\eps(3u+v\sin t)}}=\int_{-\pi/2}^{\pi/2}\big(1-s(t)\big)^{-1/2}dt,\qquad s(t)=\eps(3u+v\sin t).
$$
Soit $h(s)=(1-s)^{-1/2}$ : $h(0)=1$, $h'(0)=\frac12$, $h''(s)=\frac34(1-s)^{-5/2}$, donc pour $|s|\le\frac12$, Taylor-Lagrange donne $\big|h(s)-1-\frac s2\big|\le\frac12\cdot\frac34\cdot2^{5/2}s^2=\frac{3\sqrt2}2\,s^2$. Or $u$ et $v$ restent bornés (par $\Lambda$, disons) pour $\eps$ petit, donc $|s(t)|\le4\Lambda\eps$ **uniformément en $t$** ; pour $\eps$ assez petit, $|s(t)|\le\frac12$ et
$$
\Big|I(\eps)-\int_{-\pi/2}^{\pi/2}\Big(1+\frac{s(t)}2\Big)dt\Big|\le\pi\cdot\frac{3\sqrt2}2\,(4\Lambda)^2\eps^2=O(\eps^2).
$$
Enfin $\int_{-\pi/2}^{\pi/2}\big(1+\frac{\eps}2(3u+v\sin t)\big)dt=\pi+\frac{3\pi}2\,\eps\,u$ (l'intégrale de $\sin$ est nulle), et $u=\frac{a+b}2+O(\eps)$ par 2. D'où $I(\eps)=\pi+\dfrac{3\pi(a+b)}4\,\eps+O(\eps^2)$. $\square$

## Preuve à trous

On applique les fonctions implicites à $F(\eps,x)=P_\eps(x)$ en $(0,a)$, possible car <trou indice="dérivée de (x-a)(b-x) en x=a">$\partial_xF(0,a)=b-a\ne0$</trou> ; de même en $(0,b)$. On obtient $x_a$, $x_b$ de classe $C^\infty$. La troisième racine s'obtient par <trou indice="relations coefficients-racines">la somme des racines : $x_a+x_b+x_c=1/\eps$, donc $x_c=\frac1\eps-x_a-x_b\sim\frac1\eps$</trou>.

En dérivant $F(\eps,x_a(\eps))=0$ en $0$ : <trou>$x_a'(0)=-\dfrac{\partial_\eps F(0,a)}{\partial_xF(0,a)}=-\dfrac{a^3}{b-a}$</trou>, et $x_b'(0)=\frac{b^3}{b-a}$.

Comme $\eps(x-x_c)=-(1-\eps(x+x_a+x_b))$, on a $P_\eps=(x-x_a)(x_b-x)(1-\eps(x+x_a+x_b))$. Avec $x=u+v\sin t$, <trou indice="que devient (x-x_a)(x_b-x) ?">$(x-x_a)(x_b-x)=v^2\cos^2t$ et $dx=v\cos t\,dt$</trou>, donc $I(\eps)=\int_{-\pi/2}^{\pi/2}(1-\eps(3u+v\sin t))^{-1/2}dt$. Enfin <trou indice="Taylor pour (1-s)^(-1/2), uniformément en t">$(1-s)^{-1/2}=1+\frac s2+O(s^2)$ avec $|s|\le c\eps$ uniformément en $t$, d'où $I(\eps)=\pi+\frac{3\pi}2\eps u+O(\eps^2)$</trou>, et $u=\frac{a+b}2+O(\eps)$. $\square$

## Exemples

* **Vérification numérique** ($a=1$, $b=2$, $\eps=0{,}01$). Les racines exactes de $P_\eps$ sont $x_a\approx0{,}99038$, $x_b\approx2{,}08347$, $x_c\approx96{,}93$ ; le premier ordre prédit $x_a\approx1-0{,}01=0{,}99$, $x_b\approx2+8\times0{,}01=2{,}08$, et la somme des racines donne $x_c=1/\eps-x_a-x_b\approx96{,}93$. L'intégrale vaut $I(0{,}01)\approx3{,}21664$, contre $\pi+\frac{9\pi}4\times0{,}01\approx3{,}21228$ au premier ordre ; l'écart, $\approx4{,}4\cdot10^{-3}\approx44\,\eps^2$, est bien un $O(\eps^2)$ (pour $\eps=10^{-3}$ on trouve $\approx41\,\eps^2$).
* **Périhélie de Mercure** ([[ch06-perihelie-mercure-remarque]]). Avec $x=1/r$, $a=1/r_{\max}$, $b=1/r_{\min}$, $\eps=2GM/c^2$ (rayon de Schwarzschild du Soleil, $\approx2{,}95$ km) et $a+b=2/p$ ($p$ paramètre de l'ellipse), l'avance par révolution vaut $2I(\eps)-2\pi\approx\frac{3\pi}2(a+b)\eps=\dfrac{6\pi GM}{c^2p}$, soit $0{,}104''$ par révolution, $43''$ par siècle pour Mercure.
* **Méthode générale.** Pour toute racine simple $x_0$ d'un polynôme $P_0$ et toute perturbation $P_\eps=P_0+\eps Q$, la racine perturbée vérifie $x(\eps)=x_0-\dfrac{Q(x_0)}{P_0'(x_0)}\,\eps+O(\eps^2)$. Ici $Q(x)=x^3$, $P_0'(a)=b-a$.

## Pièges

* > ⚠️ Les fonctions implicites ne s'appliquent qu'aux racines **simples** ; près d'une racine double, la racine perturbée n'est même pas $C^1$ en $\eps$ (comportement en $\sqrt\eps$).
* > ⚠️ Le théorème des fonctions implicites ne voit **pas** la troisième racine $x_c(\eps)$ : elle ne vient d'aucune racine de $P_0$ (elle « arrive de l'infini »), d'où le recours aux relations coefficients-racines.
* Le développement de $I(\eps)$ exige un Taylor **uniforme** en $t$ : c'est le fait que $|s(t)|\le c\eps$ pour tout $t$ qui permet d'intégrer le reste.
* Ne pas développer naïvement sous l'intégrale d'origine en $x$ : les bornes $x_a(\eps)$, $x_b(\eps)$ dépendent de $\eps$ et l'intégrande est singulier aux bornes ; le changement de variable $x=u+v\sin t$ fixe les bornes et supprime la singularité.
* Signe des corrections : $x_a'(0)=-a^3/(b-a)$ a le signe de $-a$ ; c'est pour $0\lt a\lt b$ (cas physique) que les racines s'écartent.
