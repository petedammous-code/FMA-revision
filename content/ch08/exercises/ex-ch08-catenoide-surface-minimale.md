---
id: ex-ch08-catenoide-surface-minimale
type: exercise
chapters: [8, 7, 5]
title: Surface de révolution d'aire critique — la caténoïde et son seuil d'existence
source: "Classique (surface minimale de révolution, Euler 1744 ; cf. Gelfand–Fomin, *Calculus of Variations*, ch. 1) — questions et rédaction inventées"
difficulty: 3
time: 45
tools: [ch08-courbes-confinees-ouverts, ch08-ouverture-courbes-confinees, ch08-lhat-c1-differentielle, ch08-euler-lagrange, ch08-energie-conservee, ch07-reduction-ordre-un, ch07-restriction-domaine-c1-lipschitz, ch07-cauchy-lipschitz, ch07-unicite-globale]
---
## Énoncé

On note $E=C^1([0;1];\R)$, muni de la norme $\norm{\gamma}_E=\sup_{[0;1]}|\gamma|+\sup_{[0;1]}|\gamma'|$. On fixe $r>0$ et l'on pose
$$
\mathcal U_r=\big\{\gamma\in E : \gamma(0)=\gamma(1)=r \text{ et } \gamma(t)>0 \text{ pour tout } t\in[0;1]\big\},\qquad S(\gamma)=\int_0^1\gamma(t)\sqrt{1+\gamma'(t)^2}\,dt .
$$
(Quand on fait tourner le graphe de $\gamma$ autour de l'axe des $t$, on obtient une surface tendue entre deux cercles de rayon $r$ distants de $1$, d'aire $2\pi S(\gamma)$ : c'est la forme d'un film de savon entre deux anneaux.)

On dit que $\gamma\in\mathcal U_r$ est un point critique de $S$ sur $\mathcal U_r$ si $dS_\gamma(h)=0$ pour tout $h\in E$ tel que $h(0)=h(1)=0$.

1. Montrer que $\mathcal U_r$ est un ouvert de $E_{r,r}=\{\gamma\in E:\gamma(0)=\gamma(1)=r\}$, que $S$ est de classe $C^1$ sur $\mathcal U_r$, et écrire l'équation que vérifie un point critique de $S$ sur $\mathcal U_r$.
2. Soit $\gamma$ un point critique de $S$ sur $\mathcal U_r$. Montrer que $\gamma$ est de classe $C^2$ (on ne le suppose pas) et que
$$
\gamma\gamma''=1+\gamma'^2\qquad\text{sur }[0;1].
$$
3. Montrer que, pour $\gamma$ comme en 2., la fonction $t\mapsto\gamma(t)/\sqrt{1+\gamma'(t)^2}$ est constante sur $[0;1]$.
4. Montrer que les fonctions $\gamma:[0;1]\to\,]0,+\infty[$ de classe $C^2$ telles que $\gamma\gamma''=1+\gamma'^2$ sont exactement les fonctions $t\mapsto c\cosh\big((t-t_0)/c\big)$, avec $c>0$ et $t_0\in\R$.
5. En déduire que les points critiques de $S$ sur $\mathcal U_r$ sont les $\gamma_c(t)=c\cosh\big((t-\tfrac12)/c\big)$, où $c>0$ vérifie $c\cosh\big(\tfrac1{2c}\big)=r$.
6. Montrer qu'il existe un unique $x^*>0$ tel que $x^*\tanh x^*=1$, et que, si l'on pose $r^*=\tfrac12\sinh x^*$, le nombre de points critiques de $S$ sur $\mathcal U_r$ est $0$ si $r<r^*$, $1$ si $r=r^*$, $2$ si $r>r^*$. (Numériquement, $x^*\approx1{,}200$ et $r^*\approx0{,}754$.)

## Indices

### Indice 1
$S$ est l'action d'un Lagrangien qui ne dépend pas du temps et qui n'est défini (géométriquement) que pour des positions $q>0$ : utiliser le cadre des courbes confinées dans un ouvert, puis l'équation d'Euler-Lagrange. La question 3 est une loi de conservation ; la question 4 relève de l'unicité de Cauchy–Lipschitz.

### Indice 2
Avec $L(u,q,v)=q\sqrt{1+v^2}$ sur $\R\times\,]0,+\infty[\,\times\R$ : $\frac{\partial L}{\partial q}=\sqrt{1+v^2}$ et $\frac{\partial L}{\partial v}=\frac{qv}{\sqrt{1+v^2}}$. Pour 2, (E.L) dit que $P=\gamma\gamma'/\sqrt{1+\gamma'^2}$ est $C^1$ ; or $\gamma'=\psi^{-1}(P/\gamma)$ où $\psi(v)=v/\sqrt{1+v^2}$ est un difféomorphisme de $\R$ sur $]-1,1[$. Pour 3, calculer l'énergie $H=\frac{\partial L}{\partial v}\cdot\gamma'-L$.

### Indice 3
Pour 4, l'équation s'écrit $\gamma''=(1+\gamma'^2)/\gamma$ : c'est un champ $C^\infty$ sur l'ouvert $]0,+\infty[\times\R$ des $(\gamma,\gamma')$. Fixer $t_1\in\,]0;1[$ et chercher $c$, $t_0$ pour que $c\cosh((t-t_0)/c)$ ait en $t_1$ la même valeur et la même dérivée que $\gamma$ (on trouve $c=\gamma(t_1)/\sqrt{1+\gamma'(t_1)^2}$). Pour 5, $\cosh$ est paire et injective sur $[0,+\infty[$. Pour 6, étudier $\Psi(x)=\cosh(x)/(2x)$ avec $x=1/(2c)$.

## Corrigé

**1.** Posons $U_1=\,]0,+\infty[$, $U_2=\R$, $I=\R$ et $L(u,q,v)=q\sqrt{1+v^2}$ pour $(u,q,v)\in I\times U_1\times U_2$ ; $L$ est de classe $C^\infty$ et $S=\hat L$. Avec les notations de [[ch08-courbes-confinees-ouverts]], $\mathcal U_r=E_{r,r}(U_1,U_2)$.

*Ouverture.* C'est [[ch08-ouverture-courbes-confinees]] (poly, Question 9, p. 145), $U_1$ et $U_2$ étant ouverts. Directement : si $\gamma_0\in\mathcal U_r$, la fonction continue $\gamma_0$ atteint sur le compact $[0;1]$ un minimum $m>0$ ; si $\gamma\in E_{r,r}$ vérifie $\norm{\gamma-\gamma_0}_E<m$, alors $\gamma(t)\ge\gamma_0(t)-\sup|\gamma-\gamma_0|>m-m=0$ pour tout $t$, donc $\gamma\in\mathcal U_r$.

*Différentielle.* D'après la même question 9, le résultat [[ch08-lhat-c1-differentielle]] reste valable pour $L$ de classe $C^1$ sur $I\times U_1\times U_2$ : $S$ est $C^1$ sur l'ouvert $E(U_1,U_2)$ de $E$ (qui contient $\mathcal U_r$), et, avec
$$
\frac{\partial L}{\partial q}(u,q,v)=\sqrt{1+v^2},\qquad \frac{\partial L}{\partial v}(u,q,v)=\frac{qv}{\sqrt{1+v^2}},
$$
on a $dS_\gamma(h)=\int_0^1\Big(\sqrt{1+\gamma'^2}\,h+\frac{\gamma\gamma'}{\sqrt{1+\gamma'^2}}\,h'\Big)dt$.

*Équation.* Un point critique $\gamma$ de $S$ sur $\mathcal U_r$ vérifie (E.L) ([[ch08-euler-lagrange]], valable sur $E_{r,r}(U_1,U_2)$ d'après la question 9) : la fonction $P(t)=\dfrac{\gamma(t)\gamma'(t)}{\sqrt{1+\gamma'(t)^2}}$ est dérivable sur $[0;1]$ et
$$
P'(t)=\sqrt{1+\gamma'(t)^2}\qquad(t\in[0;1]).
$$

**2.** *Régularité.* D'après 1., $P$ est dérivable de dérivée $\sqrt{1+\gamma'^2}$ continue : $P$ est de classe $C^1$. Comme $\gamma$ est $C^1$ et strictement positive, $P/\gamma$ est $C^1$, et $P/\gamma=\psi(\gamma')$ avec $\psi(v)=v/\sqrt{1+v^2}$. La fonction $\psi$ est une bijection strictement croissante de $\R$ sur $]-1,1[$ ($\psi'(v)=(1+v^2)^{-3/2}>0$, limites $\mp1$ en $\mp\infty$), d'inverse $\psi^{-1}(w)=w/\sqrt{1-w^2}$, de classe $C^\infty$ sur $]-1,1[$. Donc $\gamma'=\psi^{-1}(P/\gamma)$ est $C^1$ comme composée de fonctions $C^1$ : $\gamma$ est de classe $C^2$. (C'est, en dimension $1$, le mécanisme de la transformation de Legendre, [[ch08-legendre-inversion-locale]] et [[ch08-systeme-premier-ordre-cauchy-lipschitz]].)

*Équation.* $\gamma$ étant $C^2$, on peut dériver $P$ :
$$
P'=\frac{\gamma'^2+\gamma\gamma''}{(1+\gamma'^2)^{1/2}}-\frac{\gamma\gamma'^2\gamma''}{(1+\gamma'^2)^{3/2}}=\frac{(\gamma'^2+\gamma\gamma'')(1+\gamma'^2)-\gamma\gamma'^2\gamma''}{(1+\gamma'^2)^{3/2}}=\frac{\gamma'^2+\gamma'^4+\gamma\gamma''}{(1+\gamma'^2)^{3/2}} .
$$
L'égalité $P'=(1+\gamma'^2)^{1/2}$ équivaut donc (multiplier par $(1+\gamma'^2)^{3/2}>0$) à $\gamma'^2+\gamma'^4+\gamma\gamma''=(1+\gamma'^2)^2=1+2\gamma'^2+\gamma'^4$, c'est-à-dire
$$
\gamma\gamma''=1+\gamma'^2 .
$$
Le calcul étant une suite d'équivalences, on retiendra : *pour $\gamma$ de classe $C^2$ à valeurs $>0$, (E.L) $\iff\gamma\gamma''=1+\gamma'^2$.*

**3.** $L$ ne dépend pas de $u$ et $\gamma$ est une solution $C^2$ de (E.L) d'après 2. : la conservation de l'énergie [[ch08-energie-conservee]] (valable sur $E(U_1,U_2)$, question 9 du poly) donne que
$$
H(t)=\frac{\partial L}{\partial v}(\gamma,\gamma')\,\gamma'-L(\gamma,\gamma')=\frac{\gamma\gamma'^2}{\sqrt{1+\gamma'^2}}-\gamma\sqrt{1+\gamma'^2}=\frac{\gamma\,(\gamma'^2-1-\gamma'^2)}{\sqrt{1+\gamma'^2}}=-\frac{\gamma}{\sqrt{1+\gamma'^2}}
$$
est constante. Donc $\gamma/\sqrt{1+\gamma'^2}$ est constante. (Vérification directe : la dérivée de $\gamma(1+\gamma'^2)^{-1/2}$ vaut $\gamma'(1+\gamma'^2)^{-3/2}\big(1+\gamma'^2-\gamma\gamma''\big)=0$ d'après 2.)

**4.** *Les fonctions annoncées conviennent.* Pour $c>0$ et $t_0\in\R$, $\delta(t)=c\cosh((t-t_0)/c)$ est $C^\infty$, strictement positive, avec $\delta'=\sinh((t-t_0)/c)$, $\delta''=\frac1c\cosh((t-t_0)/c)$, donc $\delta\delta''=\cosh^2((t-t_0)/c)=1+\sinh^2((t-t_0)/c)=1+\delta'^2$.

*Ce sont les seules.* Soit $\gamma:[0;1]\to\,]0,+\infty[$ de classe $C^2$ avec $\gamma\gamma''=1+\gamma'^2$. Par réduction à l'ordre 1 ([[ch07-reduction-ordre-un]]), $\alpha=(\gamma,\gamma')$ est, sur $]0;1[$, une courbe intégrale du champ autonome
$$
Y(q,p)=\Big(p,\ \frac{1+p^2}{q}\Big)\quad\text{sur l'ouvert } W=\,]0,+\infty[\,\times\R .
$$
$Y$ est de classe $C^\infty$ sur $W$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) : on est dans le cadre du théorème de Cauchy–Lipschitz [[ch07-cauchy-lipschitz]].

Fixons $t_1\in\,]0;1[$ et posons
$$
c=\frac{\gamma(t_1)}{\sqrt{1+\gamma'(t_1)^2}}>0,\qquad t_0=t_1-c\,\mathrm{argsh}\big(\gamma'(t_1)\big),\qquad\delta(t)=c\cosh\Big(\frac{t-t_0}{c}\Big).
$$
Alors $\delta'(t_1)=\sinh\big(\mathrm{argsh}\,\gamma'(t_1)\big)=\gamma'(t_1)$ et $\delta(t_1)=c\cosh\big(\mathrm{argsh}\,\gamma'(t_1)\big)=c\sqrt{1+\gamma'(t_1)^2}=\gamma(t_1)$. Donc $(\gamma,\gamma')$ et $(\delta,\delta')$ sont deux courbes intégrales de $Y$ dans $W$, définies sur $]0;1[$, égales en $t_1$ : par l'unicité globale [[ch07-unicite-globale]], $\gamma=\delta$ sur $]0;1[$, puis sur $[0;1]$ par continuité. (La constante $c$ est exactement la quantité conservée de la question 3.)

**5.** *Condition nécessaire.* Soit $\gamma$ un point critique de $S$ sur $\mathcal U_r$. Par 2. et 4., $\gamma(t)=c\cosh((t-t_0)/c)$. Les conditions $\gamma(0)=\gamma(1)=r$ donnent, $\cosh$ étant paire, $\cosh(|t_0|/c)=\cosh(|1-t_0|/c)$ ; $\cosh$ étant strictement croissante sur $[0,+\infty[$, $|t_0|=|1-t_0|$, donc $t_0=\tfrac12$. Alors $r=\gamma(0)=c\cosh\big(\tfrac1{2c}\big)$.

*Réciproque.* Soit $c>0$ avec $c\cosh(\frac1{2c})=r$. Alors $\gamma_c$ est $C^\infty$, strictement positive, et $\gamma_c(0)=\gamma_c(1)=c\cosh(\frac1{2c})=r$ : $\gamma_c\in\mathcal U_r$. D'après 4. et l'équivalence de 2., $\gamma_c$ vérifie (E.L) : $P=\frac{\partial L}{\partial v}(\gamma_c,\gamma_c')$ est $C^1$ et $P'=\frac{\partial L}{\partial q}(\gamma_c,\gamma_c')$. Pour $h\in E_{0,0}$, la formule de 1. donne
$$
dS_{\gamma_c}(h)=\int_0^1\big(P'h+Ph'\big)\,dt=\big[Ph\big]_0^1=0 .
$$
Donc $\gamma_c$ est un point critique.

**6.** *Le nombre $x^*$.* La fonction $\theta(x)=x\tanh x$ est continue sur $]0,+\infty[$, de dérivée $\tanh x+x/\cosh^2x>0$ : elle est strictement croissante, de limite $0$ en $0^+$ et $+\infty$ en $+\infty$. Par le théorème des valeurs intermédiaires et la stricte monotonie, il existe un unique $x^*>0$ avec $\theta(x^*)=1$, et $\theta<1$ sur $]0,x^*[$, $\theta>1$ sur $]x^*,+\infty[$.

*Réduction.* L'application $c\mapsto x=\frac1{2c}$ est une bijection de $]0,+\infty[$ sur lui-même, et la condition de 5. s'écrit $\Psi(x)=r$ avec $\Psi(x)=\dfrac{\cosh x}{2x}$. Deux valeurs distinctes de $c$ donnent deux points critiques distincts ($\gamma_c(\frac12)=c$). Le nombre de points critiques est donc le nombre de solutions $x>0$ de $\Psi(x)=r$.

*Variations de $\Psi$.* $\Psi'(x)=\dfrac{x\sinh x-\cosh x}{2x^2}=\dfrac{\cosh x}{2x^2}\big(\theta(x)-1\big)$ : $\Psi$ est strictement décroissante sur $]0,x^*]$ et strictement croissante sur $[x^*,+\infty[$. De plus $\Psi(x)\ge\frac1{2x}\to+\infty$ en $0^+$, et $\Psi(x)\ge\frac{e^x}{4x}\to+\infty$ en $+\infty$. Son minimum vaut, puisque $\tanh x^*=1/x^*$ et $\cosh^2-\sinh^2=1$ :
$$
\cosh x^*=\frac{1}{\sqrt{1-\tanh^2x^*}}=\frac{x^*}{\sqrt{x^{*2}-1}},\qquad \Psi(x^*)=\frac{1}{2\sqrt{x^{*2}-1}}=\frac12\tanh(x^*)\cosh(x^*)=\frac12\sinh x^*=r^* .
$$
(On a $x^*>1$ puisque $\tanh x^*<1$.) Par stricte monotonie et continuité sur chacun des deux intervalles :
* si $r<r^*$, l'équation $\Psi(x)=r$ n'a pas de solution : **aucun** point critique ;
* si $r=r^*$, une seule solution $x=x^*$ : **un** point critique, $\gamma_{c^*}$ avec $c^*=\frac1{2x^*}\approx0{,}417$ ;
* si $r>r^*$, exactement une solution dans $]0,x^*[$ et une dans $]x^*,+\infty[$ : **deux** points critiques.

Valeurs numériques (dichotomie) : $x^*\approx1{,}19968$, $r^*=\frac12\sinh x^*\approx0{,}75444$. Par exemple, pour $r=1$, on trouve $c\approx0{,}848$ (caténoïde « plate ») et $c\approx0{,}235$ (caténoïde « étranglée »).

Interprétation : si les anneaux sont trop éloignés par rapport à leur rayon (distance $1$ et $r<r^*$, c'est-à-dire distance/rayon $>1/r^*\approx1{,}33$), aucun film de révolution régulier n'est un point critique de l'aire : le film de savon éclate.

## Pièges et variantes

* Écrire (E.L) sous la forme $\gamma\gamma''=1+\gamma'^2$ **sans justifier** que $\gamma$ est $C^2$ : l'équation d'Euler-Lagrange ne dit que « $P$ est dérivable ». La question 2 montre que la régularité est automatique parce que $\frac{\partial^2L}{\partial v^2}=q(1+v^2)^{-3/2}>0$ (Lagrangien régulier) et $q>0$ ; c'est là que sert le confinement $\gamma>0$.
* Résoudre $\gamma/\sqrt{1+\gamma'^2}=c$ par « $\gamma'=\sqrt{\gamma^2/c^2-1}$ » et séparation des variables : le signe de $\gamma'$ change en $t_0$ et le champ $q\mapsto\sqrt{q^2/c^2-1}$ n'est pas lipschitzien en $q=c$, donc l'unicité est fausse pour cette équation du premier ordre (la constante $\gamma\equiv c$ la vérifie aussi, sans vérifier $\gamma\gamma''=1+\gamma'^2$). L'argument de Cauchy–Lipschitz sur l'équation d'ordre 2 évite le piège.
* Confondre point critique et minimum : pour $r>r^*$, on peut montrer que la caténoïde étranglée (petit $c$) n'est pas un minimum local, et la caténoïde plate n'est pas toujours la meilleure surface. Pour $r=0{,}8$ : $S(\gamma_c)=\frac c2+\frac{c^2}2\sinh\frac1c$ vaut $\approx0{,}736$ (plate) et $\approx0{,}746$ (étranglée), alors que des courbes de $\mathcal U_r$ qui plongent très vite vers $0$ près des bords puis restent proches de $0$ ont une valeur de $S$ aussi proche que l'on veut de $r^2=0{,}64$ (aire des deux disques, divisée par $2\pi$). Donc $\inf_{\mathcal U_r}S<0{,}7$ et cet infimum **n'est pas atteint** : un point de minimum serait un point critique, donc l'une des deux caténoïdes, de valeur $\ge0{,}736$.
* Variante : anneaux de rayons différents $r_0\neq r_1$ ; on garde $\gamma=c\cosh((t-t_0)/c)$ mais $t_0$ n'est plus $\frac12$, et l'étude du nombre de solutions se fait sur un système de deux équations à deux inconnues.
* Variante : le Lagrangien $L=q^{-1/2}\sqrt{1+v^2}$ (brachistochrone, temps de descente sous la gravité, avec $q$ la profondeur) se traite de la même façon : l'énergie conservée donne $q(1+q'^2)=\text{cte}$, dont les solutions sont des arcs de cycloïde.
