---
id: ex-ch07-champ-complet-reparametrage
type: exercise
chapters: [7]
title: Champs complets, croissance au plus affine et reparamétrage
source: "PC — TD Equations différentielles ex. 3 (adapté)"
difficulty: 2
time: 25
tools: [ch07-restriction-domaine-c1-lipschitz, ch07-equation-integrale, ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch07-lemme-des-bouts, ch05-composition-differentielles]
---
## Énoncé

Soit $X:\R^n\to\R^n$ un champ de vecteurs (indépendant du temps) de classe $C^1$, et $\|\cdot\|$ la norme euclidienne. On dit que $X$ est **complet** si toutes ses courbes intégrales maximales sont définies sur $\R$. Pour $x_0\in\R^n$, on note $\alpha_{x_0}:J(x_0)\to\R^n$ la courbe intégrale maximale de $X$ avec $\alpha_{x_0}(0)=x_0$.

1. On suppose qu'il existe des constantes $A>0$, $B\ge0$ telles que $\|X(x)\|\le A\|x\|+B$ pour tout $x$. Montrer que pour tout $t\in J(x_0)$,
$$
\|\alpha_{x_0}(t)-x_0\|\le\Big(\|x_0\|+\frac BA\Big)\big(e^{A|t|}-1\big).
$$
2. En déduire que $X$ est complet.
3. Soit $g:\R^n\to\,]0,+\infty[$ de classe $C^1$ et $Y=gX$. Montrer que, pour tout $x_0$, la courbe intégrale maximale de $Y$ issue de $x_0$ (en $t=0$) et celle de $X$ issue de $x_0$ ont **la même image**.
4. Montrer qu'on peut toujours choisir $g$ de sorte que $Y$ soit complet. Illustrer avec $n=1$, $X(x)=x^2$, $x_0=1$ : déterminer $J(1)$ et l'image de $\alpha_1$, puis l'image de la courbe maximale de $Y$ issue de $1$.

## Indices

### Indice 1
Pour 1, écrire $\alpha(t)-x_0$ sous forme intégrale et obtenir une inégalité du type $w(t)\le\int_0^t(Aw+c)$ : c'est une situation de Gronwall. Pour 2, quel théorème transforme « reste dans un compact » en « défini pour tout temps » ?

### Indice 2
Pour 1, poser $\varphi(t)=\int_0^t\big(A\,w(s)+c\big)ds$ avec $w=\|\alpha-x_0\|$, $c=A\|x_0\|+B$, et montrer $\varphi'\le A\varphi+c$, puis dériver $e^{-At}\varphi(t)$. Pour 2, lemme des bouts : $X$ est autonome et $C^1$ ; la boule fermée de rayon $r(b)$ est compacte.

### Indice 3
Pour 3, ne pas résoudre d'équation : si $\beta$ est une courbe intégrale de $Y$, poser $\sigma(s)=\int_0^s g(\beta(u))\,du$ (strictement croissante) et vérifier que $\beta\circ\sigma^{-1}$ est une courbe intégrale de $X$. Puis échanger les rôles de $X$ et $Y$ ($X=\frac1g Y$). Pour 4, essayer $g=1/(1+\|X\|^2)$.

## Corrigé

**Préliminaire.** $X$ est $C^1$ donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) : les courbes intégrales maximales $\alpha_{x_0}$ existent et sont uniques ([[ch07-courbe-integrale-maximale-def]]). Notons $\alpha=\alpha_{x_0}$.

**1.** Traitons $t\ge0$ (le cas $t\le0$ est identique en changeant $t$ en $-t$, c'est-à-dire en considérant le champ $-X$, qui vérifie la même hypothèse). Par l'équation intégrale [[ch07-equation-integrale]], $\alpha(t)-x_0=\int_0^tX(\alpha(s))\,ds$, donc avec $w(s)=\|\alpha(s)-x_0\|$ et $\|\alpha(s)\|\le w(s)+\|x_0\|$ :
$$
w(t)\le\int_0^t\big(A\|\alpha(s)\|+B\big)ds\le\int_0^t\big(A\,w(s)+c\big)ds=:\varphi(t),\qquad c=A\|x_0\|+B .
$$
$w$ est continue, donc $\varphi$ est $C^1$, $\varphi(0)=0$ et $\varphi'(t)=A\,w(t)+c\le A\varphi(t)+c$. Alors
$$
\frac{d}{dt}\Big(e^{-At}\varphi(t)\Big)=e^{-At}\big(\varphi'(t)-A\varphi(t)\big)\le c\,e^{-At},
$$
et en intégrant sur $[0,t]$ : $e^{-At}\varphi(t)\le\frac cA(1-e^{-At})$, soit $\varphi(t)\le\frac cA(e^{At}-1)$. D'où
$$
\|\alpha(t)-x_0\|=w(t)\le\varphi(t)\le\Big(\|x_0\|+\frac BA\Big)\big(e^{At}-1\big).
$$
(C'est le lemme de Gronwall, poly, Exercice VII.4.1, p. 137, redémontré ici. L'inégalité est optimale : pour $X(x)=x$, $A=1$, $B=0$, on a $\alpha(t)=e^tx_0$ et égalité.)

**2.** Soit $b=\sup J(x_0)$ et supposons $b<+\infty$. Pour $t\in[0,b[$, la question 1 donne $\alpha(t)\in K:=\bar B\big(x_0,r\big)$ avec $r=(\|x_0\|+B/A)(e^{Ab}-1)$. La boule fermée $K$ est compacte (dimension finie) et contenue dans l'ouvert $U=\R^n$. Le lemme des bouts [[ch07-lemme-des-bouts]] (champ autonome ; le poly l'énonce pour un champ lipschitzien, mais sa preuve n'utilise que les flots locaux et vaut pour un champ $C^1$ ; on peut aussi restreindre $X$ à une boule ouverte contenant $K$, sur laquelle il est lipschitzien par les accroissements finis) donne $b=+\infty$ : contradiction. De même pour la borne inférieure. Donc $J(x_0)=\R$ pour tout $x_0$ : $X$ est complet.

**3.** $Y=gX$ est $C^1$ (produit de fonctions $C^1$), donc ses courbes maximales existent et sont uniques. Fixons $x_0$, notons $\alpha:J_X\to\R^n$ et $\beta:J_Y\to\R^n$ les courbes maximales de $X$ et de $Y$ issues de $x_0$.

*Image de $\beta$ $\subset$ image de $\alpha$.* Posons $\sigma(s)=\int_0^sg(\beta(u))\,du$ pour $s\in J_Y$. L'intégrande est continu et $>0$ : $\sigma$ est $C^1$, $\sigma'>0$, donc $\sigma$ est une bijection strictement croissante de $J_Y$ sur un intervalle ouvert $\sigma(J_Y)\ni0$, de réciproque $C^1$ avec $(\sigma^{-1})'(t)=1/\sigma'(\sigma^{-1}(t))$. Soit $\tilde\alpha=\beta\circ\sigma^{-1}$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), en notant $s=\sigma^{-1}(t)$ :
$$
\tilde\alpha'(t)=\beta'(s)\,(\sigma^{-1})'(t)=\frac{g(\beta(s))\,X(\beta(s))}{g(\beta(s))}=X(\tilde\alpha(t)),\qquad \tilde\alpha(0)=\beta(0)=x_0 .
$$
Donc $\tilde\alpha$ est une courbe intégrale de $X$ de condition initiale $(0,x_0)$ : par maximalité $\sigma(J_Y)\subset J_X$ et $\tilde\alpha=\alpha$ sur $\sigma(J_Y)$ ([[ch07-unicite-globale]]). Ainsi $\beta(J_Y)=\tilde\alpha(\sigma(J_Y))\subset\alpha(J_X)$.

*Inclusion réciproque.* $X=\frac1g\,Y$ avec $\frac1g$ de classe $C^1$ et $>0$ : le même raisonnement, $X$ et $Y$ échangés, donne $\alpha(J_X)\subset\beta(J_Y)$. Les deux images sont égales.

**4.** Prenons $g=\dfrac1{1+\|X\|^2}$ : $x\mapsto\|X(x)\|^2=\langle X(x),X(x)\rangle$ est $C^1$ (composée de $X$ et d'une forme bilinéaire), et $g$ est $C^1$ à valeurs dans $]0,1]$. Comme $2u\le1+u^2$ pour $u\ge0$,
$$
\|Y(x)\|=\frac{\|X(x)\|}{1+\|X(x)\|^2}\le\frac12\le1\cdot\|x\|+\frac12 .
$$
La question 2 (avec $A=1$, $B=\frac12$) montre que $Y$ est complet ; par 3., ses trajectoires ont les mêmes images que celles de $X$ : seule la vitesse de parcours a changé.

*Exemple.* $X(x)=x^2$, $x_0=1$ : $\alpha(t)=\dfrac1{1-t}$ (on vérifie $\alpha'=\alpha^2$, $\alpha(0)=1$), et $|\alpha(t)|\to+\infty$ quand $t\to1^-$, donc $J(1)=\,]-\infty,1[$ : $X$ n'est pas complet (il ne vérifie pas l'hypothèse de 1.). L'image de $\alpha$ est $]0,+\infty[$ ($\alpha$ est continue, strictement croissante, de limites $0$ en $-\infty$ et $+\infty$ en $1^-$). Le champ $Y(x)=\dfrac{x^2}{1+x^4}$ est complet et sa courbe maximale issue de $1$, définie sur $\R$, a aussi pour image $]0,+\infty[$ : elle met un temps infini à « aller à l'infini ».

## Pièges et variantes

* En 2., appliquer le lemme des bouts avec un compact qui dépend de $t$ : il faut **un** compact fixe, d'où l'usage de $e^{Ab}$ avec $b<+\infty$ (l'hypothèse absurde sert précisément à rendre le rayon fini).
* L'hypothèse de croissance au plus affine est indispensable : $X(x)=x^2$ n'est pas complet ; en revanche $X(x)=x\ln(1+x^2)$ ne la vérifie pas non plus mais reste complet (séparer les variables : $\int_1^{+\infty}\frac{dx}{x\ln(1+x^2)}=+\infty$, donc pas d'explosion en temps fini) — la condition est suffisante, pas nécessaire.
* En 3., on ne peut pas dire « $\beta=\alpha$ » : les paramétrages diffèrent ; seules les images (les trajectoires orientées) coïncident. On a en fait montré plus : $\sigma(J_Y)=J_X$ et $\beta=\alpha\circ\sigma$.
* Variante : si $g$ s'annule en un point $p$, $p$ devient un équilibre de $Y$ et la trajectoire de $X$ passant par $p$ se scinde en plusieurs trajectoires de $Y$ : l'hypothèse $g>0$ est essentielle.
