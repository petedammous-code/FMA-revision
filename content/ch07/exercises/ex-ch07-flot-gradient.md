---
id: ex-ch07-flot-gradient
type: exercise
chapters: [7, 5]
title: Flot de gradient d'une fonction coercive
source: "Classique (systèmes de gradient, cf. Hirsch–Smale–Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*) — rédaction inventée"
difficulty: 2
time: 25
tools: [ch07-restriction-domaine-c1-lipschitz, ch07-cauchy-lipschitz, ch07-courbe-integrale-maximale-def, ch07-lemme-des-bouts, ch05-gradient-hilbert, ch05-composition-differentielles]
---
## Énoncé

On munit $\R^n$ de son produit scalaire usuel $\langle\cdot,\cdot\rangle$ et de la norme associée $\|\cdot\|$. Soit $f:\R^n\to\R$ une fonction de classe $C^2$, **coercive**, c'est-à-dire telle que $f(x)\to+\infty$ quand $\|x\|\to+\infty$. On note $\nabla f(x)$ son gradient (le vecteur tel que $df_x(h)=\langle\nabla f(x),h\rangle$ pour tout $h$) et l'on considère l'équation
$$
\alpha'(t)=-\nabla f(\alpha(t)),\qquad \alpha(0)=x_0\in\R^n .
$$

1. Montrer que ce problème admet une unique solution maximale $\alpha:J\to\R^n$, et que $t\mapsto f(\alpha(t))$ est décroissante sur $J$.
2. Montrer que $\sup J=+\infty$.
3. Montrer que $\displaystyle\int_0^{+\infty}\|\nabla f(\alpha(t))\|^2\,dt\le f(x_0)-\min_{\R^n}f$ (on justifiera l'existence du minimum), puis qu'il existe une suite $t_k\to+\infty$ telle que $(\alpha(t_k))$ converge vers un point critique de $f$.
4. Montrer qu'une solution non constante ne peut pas être périodique.
5. On prend $n=1$ et $f(x)=x^4/4$. Calculer la solution maximale de condition initiale $x_0\neq0$. Est-elle définie sur $\R$ tout entier ? Pourquoi l'argument de la question 2 ne s'applique-t-il pas aux temps négatifs ?

## Indices

### Indice 1
Pour 1, calculer la dérivée de $t\mapsto f(\alpha(t))$ par la règle de la chaîne. Pour 2, chercher un compact dont la trajectoire ne sort pas pour $t\ge0$.

### Indice 2
Le champ $X=-\nabla f$ est $C^1$ (car $f$ est $C^2$), donc localement lipschitzien : Cauchy–Lipschitz s'applique. Pour 2 : le sous-niveau $K=\{x : f(x)\le f(x_0)\}$ est fermé et borné ; c'est le cadre du lemme des bouts.

### Indice 3
$\dfrac{d}{dt}f(\alpha(t))=-\|\nabla f(\alpha(t))\|^2$ ; intégrer entre $0$ et $T$. Si l'intégrande restait $\ge c^2>0$ pour $t$ grand, l'intégrale divergerait. Pour 4, intégrer sur une période.

## Corrigé

**1.** Le champ autonome $X=-\nabla f:\R^n\to\R^n$ a pour composantes $-\partial f/\partial x_i$, qui sont $C^1$ puisque $f$ est $C^2$ : $X$ est de classe $C^1$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Par Cauchy–Lipschitz [[ch07-cauchy-lipschitz]] et la définition [[ch07-courbe-integrale-maximale-def]], il existe une unique courbe intégrale maximale $\alpha:J\to\R^n$ avec $\alpha(0)=x_0$, $J$ intervalle ouvert contenant $0$.

La fonction $\varphi=f\circ\alpha$ est $C^1$ sur $J$ et, par la règle de la chaîne ([[ch05-composition-differentielles]]) et la définition du gradient ([[ch05-gradient-hilbert]]),
$$
\varphi'(t)=df_{\alpha(t)}\big(\alpha'(t)\big)=\big\langle\nabla f(\alpha(t)),-\nabla f(\alpha(t))\big\rangle=-\|\nabla f(\alpha(t))\|^2\le0 .
$$
Donc $\varphi$ est décroissante sur $J$.

**2.** Posons $K=\{x\in\R^n : f(x)\le f(x_0)\}$.
* $K$ est fermé, comme image réciproque du fermé $]-\infty,f(x_0)]$ par $f$ continue.
* $K$ est borné : par coercivité il existe $R>0$ tel que $f(x)>f(x_0)$ dès que $\|x\|>R$, donc $K\subset\bar B(0,R)$.

En dimension finie, $K$ est donc compact, et c'est une partie compacte de l'ouvert $U=\R^n$. D'après 1., pour $t\in[0,\sup J[$ on a $f(\alpha(t))\le f(\alpha(0))=f(x_0)$, c'est-à-dire $\alpha([0,\sup J[)\subset K$. Le lemme des bouts [[ch07-lemme-des-bouts]], appliqué au champ autonome $X$ avec $\tau_0=0$, donne $\sup J=+\infty$.

*Rigueur.* Le poly énonce le lemme des bouts pour un champ lipschitzien ; sa preuve n'utilise que l'existence de flots locaux et l'invariance par translation en temps, donc s'applique telle quelle à un champ $C^1$. On peut aussi l'appliquer à la lettre : sur la boule ouverte $V=B(0,R+1)\supset K$, $dX$ est continue donc bornée sur le compact $\bar V$, et par les accroissements finis ([[ch05-accroissements-finis]], $V$ convexe) $X_{|V}$ est lipschitzien ; la courbe maximale de $X_{|V}$ issue de $x_0$ coïncide avec $\alpha$ sur $[0,\sup J[$ (où $\alpha$ reste dans $K\subset V$), et le lemme appliqué à $X_{|V}$ donne la même conclusion.

**3.** $f$ est continue sur le compact non vide $K$ (il contient $x_0$), donc y atteint un minimum $m=f(p_0)$ ; pour $x\notin K$, $f(x)>f(x_0)\ge m$. Donc $m=\min_{\R^n}f$. Pour $T>0$, en intégrant la formule de 1. :
$$
\int_0^T\|\nabla f(\alpha(t))\|^2\,dt=f(x_0)-f(\alpha(T))\le f(x_0)-m .
$$
L'intégrande est positif, donc l'intégrale généralisée converge et $\int_0^{+\infty}\|\nabla f(\alpha(t))\|^2dt\le f(x_0)-m$.

Montrons que $\liminf_{t\to+\infty}\|\nabla f(\alpha(t))\|=0$. Sinon il existerait $c>0$ et $T_0$ tels que $\|\nabla f(\alpha(t))\|\ge c$ pour $t\ge T_0$, et l'intégrale ci-dessus vaudrait au moins $c^2(T-T_0)\to+\infty$ : contradiction. On choisit donc $t_k\to+\infty$ avec $\nabla f(\alpha(t_k))\to0$. Comme $\alpha(t_k)\in K$ compact, on extrait une sous-suite $\alpha(t_{k_j})\to p\in K$. Par continuité de $\nabla f$, $\nabla f(p)=\lim_j\nabla f(\alpha(t_{k_j}))=0$ : $p$ est un point critique et $(t_{k_j})$ est la suite cherchée.

**4.** Supposons $\alpha(T)=\alpha(0)$ pour un $T>0$ (d'après 2., $T\in J$). Alors $f(\alpha(T))=f(\alpha(0))$, donc par 1.
$$
0=f(\alpha(0))-f(\alpha(T))=\int_0^T\|\nabla f(\alpha(t))\|^2\,dt .
$$
L'intégrande étant continu et positif, il est nul sur $[0,T]$ ; en particulier $\nabla f(x_0)=0$. Mais alors la fonction constante égale à $x_0$ est une courbe intégrale de $X$ de condition initiale $(0,x_0)$ définie sur $\R$ ; par unicité ([[ch07-unicite-globale]]) $\alpha$ est constante. Une solution périodique est donc constante.

**5.** Ici $X(x)=-f'(x)=-x^3$. Pour $x_0\neq0$, $\alpha$ ne s'annule pas (la fonction nulle est solution, et l'on conclut par unicité comme en 4.) ; alors $\left(\alpha^{-2}\right)'=-2\alpha'\alpha^{-3}=2$, donc $\alpha(t)^{-2}=x_0^{-2}+2t$ et, $\alpha$ gardant le signe de $x_0$,
$$
\alpha(t)=\frac{x_0}{\sqrt{1+2x_0^2t}},\qquad t\in J=\left]-\frac1{2x_0^2},+\infty\right[ .
$$
Vérification : $\alpha'(t)=x_0\cdot\left(-\tfrac12\right)(1+2x_0^2t)^{-3/2}\cdot2x_0^2=-\alpha(t)^3$. Cet intervalle est maximal car $|\alpha(t)|\to+\infty$ quand $t\to-\frac1{2x_0^2}$ (aucun prolongement continu n'est possible). La solution n'est **pas** définie sur $\R$ : elle explose dans le passé.

L'argument de 2. utilise $f(\alpha(t))\le f(x_0)$, qui n'est vrai que pour $t\ge0$ : pour $t<0$, $f\circ\alpha$ **croît** quand on remonte le temps et la trajectoire n'est confinée dans aucun compact (ici $f(\alpha(t))=\frac{x_0^4}{4(1+2x_0^2t)^2}\to+\infty$).

## Pièges et variantes

* Appliquer le lemme des bouts sans exhiber le **compact** : « $f$ décroît » ne suffit pas, c'est la coercivité qui rend le sous-niveau borné. Sans coercivité, la conclusion de 2. peut tomber : pour $f(x)=-x^4/4$ sur $\R$, $\alpha'=\alpha^3$ et $\alpha(t)=x_0/\sqrt{1-2x_0^2t}$ explose en $t=1/(2x_0^2)$ ; $f\circ\alpha$ décroît bien, mais vers $-\infty$.
* Ne pas confondre « solution globale » et « solution bornée » : pour $f(x)=e^x$ (non coercive), $\alpha(t)=-\ln(e^{-x_0}+t)$ est définie pour tout $t\ge0$ mais tend vers $-\infty$.
* Le lemme des bouts ne donne que $\sup J=+\infty$ ; la borne inférieure est une autre affaire (question 5).
* Oublier que la conclusion de 3. porte sur une **sous-suite** : en général $\alpha(t)$ ne converge pas (il existe des contre-exemples $C^\infty$ en dimension $2$ dont les trajectoires spiralent vers un cercle de points critiques). Si les points critiques de $f$ sont isolés, on peut montrer que $\alpha(t)$ converge (l'ensemble des valeurs d'adhérence est connexe et formé de points critiques).
* Variante : pour $f$ seulement $C^1$, le champ $-\nabla f$ est seulement continu ; on perd Cauchy–Lipschitz (unicité) mais, avec le théorème de Peano, la décroissance de $f\circ\alpha$ reste vraie.
* Variante : remplacer $-\nabla f$ par un champ $X$ tel que $\langle\nabla f,X\rangle\le0$ ($f$ est une **fonction de Lyapunov**) : 1., 2. restent vrais mot pour mot.
