---
id: ex-ch08-jacobi-oscillateur-wirtinger
type: exercise
chapters: [8, 7]
title: Oscillateur harmonique à extrémités fixées — quand le point critique cesse d'être un minimum
source: "Classique (condition de Jacobi et inégalité de Wirtinger ; cf. Gelfand–Fomin, *Calculus of Variations*, ch. 5) — rédaction inventée"
difficulty: 2
time: 25
tools: [ch08-lhat-c1-differentielle, ch08-euler-lagrange, ch08-equation-newton, ch07-reduction-ordre-un, ch07-cauchy-lipschitz, ch07-unicite-globale]
---
## Énoncé

Soit $\omega>0$. On note $E=C^1([0;1];\R)$, muni de la norme $\norm{\gamma}_E=\sup_{[0;1]}|\gamma|+\sup_{[0;1]}|\gamma'|$, et $E_{0,0}=\{\gamma\in E : \gamma(0)=\gamma(1)=0\}$. On considère
$$
\hat L(\gamma)=\frac12\int_0^1\big(\gamma'(t)^2-\omega^2\gamma(t)^2\big)\,dt\qquad(\gamma\in E).
$$

1. Déterminer, selon la valeur de $\omega$, tous les points critiques de la restriction de $\hat L$ à $E_{0,0}$.
2. Vérifier que $\hat L(\gamma+h)=\hat L(\gamma)+d\hat L_\gamma(h)+\hat L(h)$ pour $\gamma,h\in E$. On suppose $\omega>\pi$ : montrer que la courbe nulle est un point critique de $\hat L|_{E_{0,0}}$ qui n'est ni un minimum local ni un maximum local.
3. On suppose $0<\omega<\pi$ et l'on pose $\varphi(t)=\cos\big(\omega(t-\tfrac12)\big)$. Montrer que $\varphi>0$ sur $[0;1]$ et que, pour tout $h\in E$,
$$
h'^2-\omega^2h^2=\Big(h'-h\,\frac{\varphi'}{\varphi}\Big)^2+\frac{d}{dt}\Big(h^2\,\frac{\varphi'}{\varphi}\Big)\quad\text{sur }[0;1].
$$
4. On suppose toujours $0<\omega<\pi$. En déduire que la courbe nulle est l'unique point de $E_{0,0}$ où $\hat L|_{E_{0,0}}$ atteint son minimum.
5. En déduire l'inégalité de Wirtinger : pour tout $h\in E_{0,0}$, $\displaystyle\int_0^1h'(t)^2\,dt\ \ge\ \pi^2\int_0^1h(t)^2\,dt$, et montrer qu'elle est optimale. Que dire des points critiques trouvés en 1. pour $\omega=\pi$ ?

## Indices

### Indice 1
$\hat L$ est l'action d'un Lagrangien mécanique « énergie cinétique moins potentiel », avec un potentiel quadratique. Les points critiques sont donc les solutions d'une équation différentielle connue, qu'il faut ensuite confronter aux **deux** conditions $\gamma(0)=\gamma(1)=0$.

### Indice 2
(E.L) s'écrit ici $\gamma''=-\omega^2\gamma$. Ramenée au système d'ordre 1 $(\gamma,\gamma')'=(\gamma',-\omega^2\gamma)$, à champ linéaire donc $C^1$, elle relève de Cauchy–Lipschitz : une solution est déterminée par $(\gamma(0),\gamma'(0))$. Pour 2, tester $\hat L$ sur $h=s\sin(k\pi t)$ et calculer $\hat L(h)$ en fonction de $k$, $s$, $\omega$.

### Indice 3
Pour 3, développer le carré et dériver $h^2\varphi'/\varphi$ en utilisant $\varphi''=-\omega^2\varphi$. Pour 4, intégrer l'identité sur $[0;1]$ : le terme de bord disparaît car $h(0)=h(1)=0$. Pour l'égalité, $h'=h\varphi'/\varphi$ signifie $(h/\varphi)'=0$.

## Corrigé

**1.** $\hat L$ est l'action du Lagrangien $L(u,q,v)=\tfrac12v^2-\tfrac12\omega^2q^2$, de classe $C^\infty$ sur $\R\times\R\times\R$ ; c'est le cas $L=T-U$ avec $T(v)=\tfrac12v^2$ et $U(q)=\tfrac12\omega^2q^2$. D'après [[ch08-lhat-c1-differentielle]], avec $\frac{\partial L}{\partial q}=-\omega^2q$ et $\frac{\partial L}{\partial v}=v$,
$$
d\hat L_\gamma(h)=\int_0^1\big(\gamma'h'-\omega^2\gamma h\big)\,dt .
$$

*Condition nécessaire.* Si $\gamma\in E_{0,0}$ est un point critique de $\hat L|_{E_{0,0}}$, l'équation d'Euler-Lagrange [[ch08-euler-lagrange]] (ici l'équation de Newton [[ch08-equation-newton]], $\nabla U(q)=\omega^2q$) affirme que $\gamma'$ est dérivable et que $\gamma''=-\omega^2\gamma$ sur $[0;1]$. En particulier $\gamma''$ est continue : $\gamma$ est $C^2$.

Résolvons. Posons $\delta(t)=\gamma(0)\cos(\omega t)+\frac{\gamma'(0)}{\omega}\sin(\omega t)$, qui vérifie $\delta''=-\omega^2\delta$, $\delta(0)=\gamma(0)$, $\delta'(0)=\gamma'(0)$. Par réduction à l'ordre 1 ([[ch07-reduction-ordre-un]]), $\alpha=(\gamma,\gamma')$ et $(\delta,\delta')$ sont deux courbes intégrales du champ linéaire $X(x_1,x_2)=(x_2,-\omega^2x_1)$ de $\R^2$, de même condition initiale en $t=0$. Ce champ est $C^1$, donc localement lipschitzien, et le théorème de Cauchy–Lipschitz [[ch07-cauchy-lipschitz]] avec l'unicité globale [[ch07-unicite-globale]] donne $\gamma=\delta$ sur $[0;1]$. (L'intervalle $[0;1]$ est fermé ; on applique l'unicité sur $]0;1[$ puis on conclut par continuité aux bords, ou l'on prolonge $\gamma$ en une solution sur un intervalle ouvert.)

Les conditions aux bords donnent alors :
* $\gamma(0)=0$, donc $\gamma(t)=\beta\sin(\omega t)$ avec $\beta=\gamma'(0)/\omega$ ;
* $\gamma(1)=0$, donc $\beta\sin\omega=0$.

*Réciproque.* Si $\gamma\in E_{0,0}$ est $C^2$ et vérifie $\gamma''=-\omega^2\gamma$, alors pour $h\in E_{0,0}$, en intégrant par parties,
$$
d\hat L_\gamma(h)=\big[\gamma'h\big]_0^1-\int_0^1(\gamma''+\omega^2\gamma)h\,dt=0 .
$$
Conclusion :
* si $\omega\notin\pi\N^*$, le seul point critique est la courbe nulle ;
* si $\omega=k\pi$ avec $k\in\N^*$, les points critiques sont exactement les $\gamma_\beta(t)=\beta\sin(k\pi t)$, $\beta\in\R$ : une droite entière de points critiques.

**2.** Par bilinéarité, pour $\gamma,h\in E$ :
$$
\hat L(\gamma+h)=\frac12\int_0^1\big((\gamma'+h')^2-\omega^2(\gamma+h)^2\big)=\hat L(\gamma)+\int_0^1\big(\gamma'h'-\omega^2\gamma h\big)+\hat L(h),
$$
et le terme du milieu est $d\hat L_\gamma(h)$ d'après 1. Pour $\gamma=0$, on a $d\hat L_0=0$ : la courbe nulle est un point critique (pour toute valeur de $\omega$), et $\hat L(h)-\hat L(0)=\hat L(h)$.

Pour $k\in\N^*$ et $s\in\R$, posons $h_{k,s}(t)=s\sin(k\pi t)\in E_{0,0}$. Avec $\int_0^1\sin^2(k\pi t)\,dt=\int_0^1\cos^2(k\pi t)\,dt=\tfrac12$,
$$
\hat L(h_{k,s})=\frac{s^2}{2}\Big(\frac{k^2\pi^2}{2}-\frac{\omega^2}{2}\Big)=\frac{s^2\,(k^2\pi^2-\omega^2)}{4}.
$$
Par ailleurs $\norm{h_{k,s}}_E\le |s|(1+k\pi)\to0$ quand $s\to0$. Supposons $\omega>\pi$.
* Avec $k=1$ : $\hat L(h_{1,s})<0=\hat L(0)$ pour tout $s\neq0$, et $h_{1,s}$ est aussi proche que l'on veut de $0$ dans $E_{0,0}$ : $0$ n'est pas un minimum local.
* Avec $k$ tel que $k\pi>\omega$ : $\hat L(h_{k,s})>0$ pour $s\neq0$ : $0$ n'est pas un maximum local.

La courbe nulle est donc un point critique « col » : (E.L) ne garantit rien de plus qu'un point critique.

**3.** Pour $t\in[0;1]$, $|\omega(t-\tfrac12)|\le\omega/2<\pi/2$, donc $\varphi(t)>0$. Comme $\varphi$ est $C^\infty$ et ne s'annule pas, $\varphi'/\varphi$ est $C^\infty$ sur $[0;1]$, et $h^2\varphi'/\varphi$ est $C^1$ pour $h\in E$. On a $\varphi''=-\omega^2\varphi$, donc
$$
\Big(\frac{\varphi'}{\varphi}\Big)'=\frac{\varphi''\varphi-\varphi'^2}{\varphi^2}=-\omega^2-\frac{\varphi'^2}{\varphi^2}.
$$
D'où
$$
\begin{aligned}
\frac{d}{dt}\Big(h^2\frac{\varphi'}{\varphi}\Big)&=2hh'\frac{\varphi'}{\varphi}-\omega^2h^2-h^2\frac{\varphi'^2}{\varphi^2},\\
\Big(h'-h\frac{\varphi'}{\varphi}\Big)^2&=h'^2-2hh'\frac{\varphi'}{\varphi}+h^2\frac{\varphi'^2}{\varphi^2},
\end{aligned}
$$
et la somme vaut $h'^2-\omega^2h^2$.

**4.** Soit $h\in E_{0,0}$. On intègre l'identité de 3 sur $[0;1]$ ; le terme de bord vaut $\big[h^2\varphi'/\varphi\big]_0^1=0$ car $h(0)=h(1)=0$. Donc
$$
\hat L(h)=\frac12\int_0^1\Big(h'(t)-h(t)\frac{\varphi'(t)}{\varphi(t)}\Big)^2dt\ \ge\ 0=\hat L(0).
$$
Si $\hat L(h)=0$, l'intégrande, continu et positif, est nul : $h'\varphi-h\varphi'=0$, c'est-à-dire $(h/\varphi)'=0$ sur $[0;1]$. Donc $h=c\varphi$ pour une constante $c$, et $0=h(0)=c\cos(\omega/2)$ avec $\cos(\omega/2)>0$ impose $c=0$. Ainsi $\hat L(h)>\hat L(0)$ pour tout $h\in E_{0,0}\setminus\{0\}$ : la courbe nulle est l'unique point de minimum (global, strict) de $\hat L|_{E_{0,0}}$.

**5.** Soit $h\in E_{0,0}$. Pour tout $\omega\in\,]0;\pi[$, la question 4 donne $\int_0^1h'^2\ge\omega^2\int_0^1h^2$. En faisant tendre $\omega$ vers $\pi$ (les intégrales ne dépendent pas de $\omega$), on obtient $\int_0^1h'^2\ge\pi^2\int_0^1h^2$. La constante $\pi^2$ est optimale : pour $h(t)=\sin(\pi t)\in E_{0,0}$, $\int_0^1h'^2=\pi^2/2=\pi^2\int_0^1h^2$.

Pour $\omega=\pi$, l'inégalité de Wirtinger dit exactement $\hat L\ge0=\hat L(0)$ sur $E_{0,0}$, et le calcul de 2. donne $\hat L(\beta\sin(\pi t))=0$. Les points critiques trouvés en 1., $\gamma_\beta=\beta\sin(\pi t)$, sont donc **tous** des points de minimum global de $\hat L|_{E_{0,0}}$, et le minimum n'est plus strict.

Bilan : $\omega<\pi$, unique point critique et minimum strict ; $\omega=\pi$, une droite de minima ; $\omega>\pi$, la courbe nulle reste critique mais n'est plus un extremum. Le seuil $\omega=\pi$ est la première valeur pour laquelle la solution $\sin(\omega t)$ de (E.L) partie de $0$ s'annule de nouveau en $t=1$ (on dit que $t=1$ est **conjugué** de $t=0$).

## Pièges et variantes

* Confondre le **problème aux deux bouts** ($\gamma(0)=a$, $\gamma(1)=b$) et le **problème de Cauchy** ($\gamma(t_0)$, $\gamma'(t_0)$ donnés). Cauchy–Lipschitz donne existence et unicité pour le second ([[ch08-existence-unicite-locale]]), jamais pour le premier : ici, pour $\omega=k\pi$, le problème $\gamma(0)=\gamma(1)=0$ a une infinité de solutions, et le problème $\gamma(0)=0$, $\gamma(1)=1$ n'en a **aucune** (car $\beta\sin(k\pi)=0\neq1$).
* Croire qu'un point critique est un minimum parce que le Lagrangien est « convexe en $v$ » : $L$ est strictement convexe en $v$ pour tout $\omega$, et pourtant $0$ n'est pas un minimum pour $\omega>\pi$. La convexité en $v$ seule ne suffit pas, il faut contrôler le terme en $q$ ; c'est le rôle de la fonction $\varphi>0$ (solution de (E.L) sans zéro sur $[0;1]$).
* Dans 3, oublier de vérifier que $\varphi$ ne s'annule pas : pour $\omega\ge\pi$ aucune solution de $\varphi''=-\omega^2\varphi$ ne reste strictement positive sur $[0;1]$ (entre deux zéros consécutifs de $\sin(\omega t+\theta)$ il y a un intervalle de longueur $\pi/\omega\le1$), et l'argument tombe, comme il se doit d'après 2.
* Variante : sur $[0;T]$ au lieu de $[0;1]$, le seuil devient $\omega T=\pi$ : sur un intervalle de temps court, la trajectoire d'un oscillateur minimise l'action ; sur un intervalle long, elle n'est qu'un point critique.
* Variante : l'égalité dans Wirtinger n'a lieu que pour $h=c\sin(\pi t)$ ; on peut le montrer avec $\varphi=\sin(\pi t)$, mais $\varphi$ s'annule aux bords et il faut alors contrôler $h^2\varphi'/\varphi$ près de $0$ et $1$ (par exemple $h(t)^2/\sin(\pi t)\to0$ car $h(t)=O(t)$).
