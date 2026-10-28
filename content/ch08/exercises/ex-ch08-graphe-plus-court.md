---
id: ex-ch08-graphe-plus-court
type: exercise
chapters: [8, 5]
title: Le plus court graphe entre deux points
source: "Classique (problème du plus court chemin, exemple fondateur du calcul des variations ; cf. Gelfand–Fomin, *Calculus of Variations*, ch. 1) — rédaction inventée"
difficulty: 1
time: 15
tools: [ch08-lhat-c1-differentielle, ch08-du-bois-reymond, ch08-euler-lagrange, ch05-differentielles-partielles, ch05-taylor-reste-integral-1d]
---
## Énoncé

On note $E=C^1([0;1];\R)$, muni de la norme $\norm{\gamma}_E=\sup_{[0;1]}|\gamma|+\sup_{[0;1]}|\gamma'|$. Pour $a,b\in\R$, on note $E_{a,b}=\{\gamma\in E : \gamma(0)=a,\ \gamma(1)=b\}$, et l'on pose
$$
\ell(\gamma)=\int_0^1\sqrt{1+\gamma'(t)^2}\,dt\qquad(\gamma\in E),
$$
qui est la longueur du graphe de $\gamma$ dans le plan.

1. Montrer que $\ell$ est de classe $C^1$ sur $E$ et calculer $d\ell_\gamma(h)$ pour $\gamma,h\in E$.
2. Montrer que la restriction de $\ell$ à $E_{a,b}$ admet un et un seul point critique, que l'on déterminera.
3. Montrer que ce point critique est l'unique point où $\ell$ atteint son minimum sur $E_{a,b}$, et donner la valeur de ce minimum.

## Indices

### Indice 1
$\ell$ est l'action $\hat L$ d'un Lagrangien $L(u,q,v)$ qui ne dépend que de $v$ : le cours donne directement $d\hat L_\gamma$. Un point critique sur $E_{a,b}$, c'est $d\ell_\gamma(h)=0$ pour toutes les variations $h$ nulles en $0$ et en $1$.

### Indice 2
Ici $\frac{\partial L}{\partial q}=0$ : la condition de point critique s'écrit $\int_0^1 B(t)h'(t)\,dt=0$ pour tout $h\in E_{0,0}$, avec $B$ continue. C'est exactement l'hypothèse du lemme de du Bois-Reymond. Il reste à « inverser » $v\mapsto v/\sqrt{1+v^2}$.

### Indice 3
Pour 3, la fonction $f(v)=\sqrt{1+v^2}$ est strictement convexe : elle est au-dessus de sa tangente en $m=b-a$, $f(v)\ge f(m)+f'(m)(v-m)$, avec égalité seulement en $v=m$. Appliquer avec $v=\gamma'(t)$ et intégrer : que vaut $\int_0^1(\gamma'(t)-m)\,dt$ ?

## Corrigé

**1.** Posons $L(u,q,v)=\sqrt{1+v^2}$ pour $(u,q,v)\in I\times\R\times\R$, avec $I=\R$ (intervalle ouvert contenant $[0;1]$). La fonction $L$ est de classe $C^1$ (et même $C^\infty$, car $1+v^2>0$), et $\ell=\hat L$. Ses dérivées partielles ([[ch05-differentielles-partielles]]) sont
$$
\frac{\partial L}{\partial q}(u,q,v)=0,\qquad \frac{\partial L}{\partial v}(u,q,v)=\frac{v}{\sqrt{1+v^2}} .
$$
Le résultat [[ch08-lhat-c1-differentielle]] (poly, Question 2, p. 143), dont l'unique hypothèse « $L$ de classe $C^1$ sur $I\times V\times V$ » est vérifiée avec $V=\R$, donne : $\ell$ est de classe $C^1$ sur $E$ et, pour $\gamma,h\in E$,
$$
d\ell_\gamma(h)=\int_0^1\frac{\gamma'(t)}{\sqrt{1+\gamma'(t)^2}}\,h'(t)\,dt .
$$

**2.** *Condition nécessaire.* Soit $\gamma\in E_{a,b}$ un point critique de $\ell|_{E_{a,b}}$ : $d\ell_\gamma(h)=0$ pour tout $h\in E_{0,0}$ (espace directeur de $E_{a,b}$). Posons $B(t)=\gamma'(t)/\sqrt{1+\gamma'(t)^2}$ ; $B$ est continue sur $[0;1]$ (composée de $\gamma'$ continue et d'une fonction continue), et $\int_0^1B(t)h'(t)\,dt=0$ pour tout $h\in C^1([0;1];\R)$ nulle en $0$ et $1$. Le lemme de du Bois-Reymond [[ch08-du-bois-reymond]] (poly, Question 3, p. 144) donne : $B$ est constante, $B\equiv\beta$. (C'est aussi l'équation d'Euler-Lagrange [[ch08-euler-lagrange]] : $\frac{d}{dt}B=\frac{\partial L}{\partial q}=0$.)

La fonction $\psi(v)=v/\sqrt{1+v^2}$ est dérivable de dérivée $\psi'(v)=(1+v^2)^{-3/2}>0$ : elle est strictement croissante, donc injective sur $\R$. De $\psi(\gamma'(t))=\beta$ pour tout $t$ on déduit que $\gamma'(t)$ est constant, égal à un réel $m$. Alors $\gamma(t)=a+mt$, et $\gamma(1)=b$ impose $m=b-a$ : $\gamma=\gamma_0$, où
$$
\gamma_0(t)=a+(b-a)t \qquad (\text{le segment}).
$$

*Réciproque.* $\gamma_0\in E_{a,b}$ et, pour $h\in E_{0,0}$, $d\ell_{\gamma_0}(h)=\psi(b-a)\int_0^1h'(t)\,dt=\psi(b-a)\big(h(1)-h(0)\big)=0$. Donc $\gamma_0$ est point critique, et c'est le seul.

**3.** Posons $f(v)=\sqrt{1+v^2}$ et $m=b-a$. On a $f''(v)=(1+v^2)^{-3/2}>0$. Par la formule de Taylor avec reste intégral à l'ordre 1 ([[ch05-taylor-reste-integral-1d]]),
$$
f(v)-f(m)-f'(m)(v-m)=\int_m^v (v-s)f''(s)\,ds ,
$$
et cette quantité est $>0$ si $v\neq m$ (l'intégrande $(v-s)f''(s)$ est continu, de signe constant et non nul strictement entre $m$ et $v$), nulle si $v=m$.

Soit $\gamma\in E_{a,b}$. En appliquant cette inégalité avec $v=\gamma'(t)$ et en intégrant sur $[0;1]$ :
$$
\ell(\gamma)\ \ge\ f(m)+f'(m)\int_0^1\big(\gamma'(t)-m\big)\,dt = f(m)+f'(m)\big(\gamma(1)-\gamma(0)-m\big)=f(m)=\ell(\gamma_0).
$$
Donc $\gamma_0$ réalise le minimum de $\ell$ sur $E_{a,b}$. Si $\ell(\gamma)=\ell(\gamma_0)$, la fonction continue et positive $t\mapsto f(\gamma'(t))-f(m)-f'(m)(\gamma'(t)-m)$ est d'intégrale nulle, donc identiquement nulle, donc $\gamma'(t)=m$ pour tout $t$ et $\gamma=\gamma_0$ : le minimum n'est atteint qu'en $\gamma_0$. Sa valeur est
$$
\min_{E_{a,b}}\ell=\ell(\gamma_0)=\sqrt{1+(b-a)^2},
$$
la distance euclidienne entre les points $(0,a)$ et $(1,b)$ du plan.

## Pièges et variantes

* Le résultat de la question 2 ne dit **rien** sur l'existence d'un minimum : (E.L) est une condition **nécessaire** de point critique. C'est l'argument de convexité de la question 3 qui transforme « unique point critique » en « unique minimum ». Sans convexité en $v$, un point critique peut n'être ni un minimum ni un maximum.
* Ne pas écrire « $\frac{d}{dt}B=0$ donc $\gamma''=0$ » : on ne sait pas a priori que $\gamma$ est $C^2$. Le passage par l'injectivité de $\psi$ évite toute hypothèse de régularité ; c'est un cas particulier de l'inversion de $v\mapsto\frac{\partial L}{\partial v}$ (transformation de Legendre, [[ch08-legendre-inversion-locale]]).
* Variante : courbes paramétrées $\gamma:[0;1]\to\R^n$ avec $L(u,q,v)=\norm{v}$, qui n'est $C^1$ que sur $U_2=\R^n\setminus\{0\}$ (courbes à vitesse jamais nulle, [[ch08-courbes-confinees-ouverts]]). (E.L) donne seulement $\gamma'/\norm{\gamma'}$ constant : **tout** reparamétrage régulier du segment est critique. Il n'y a plus unicité, car ce Lagrangien n'est pas régulier ($\frac{\partial^2L}{\partial v^2}(v)$ s'annule dans la direction de $v$, [[ch08-lagrangien-regulier]]).
* Variante : avec $L(u,q,v)=v^2$ (énergie au lieu de longueur), même unique point critique $\gamma_0$, et l'inégalité $\int_0^1\gamma'^2\ge\big(\int_0^1\gamma'\big)^2=(b-a)^2$ (Cauchy–Schwarz) montre que c'est encore le minimum.
