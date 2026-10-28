---
id: ch07-composition-flot
type: theorem
chapter: 7
title: Formule de composition du flot (champ dépendant du temps)
ref: Théorème VII.3.7
page: 135
importance: 2
depends: [ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-flot-global-def]
tags: [flot, composition, champ-dependant-du-temps, chasles, courbe-integrale-maximale]
---
## Intuition

> 💡 Relation de Chasles pour les trajectoires. Pour aller de l'instant $t_0$ à l'instant $s+t$ en partant de $x$, on peut faire une **escale** à l'instant $s$ : on se trouve alors en $y=F(t_0,s,x)$, et l'on repart de $y$ à l'instant $s$ jusqu'à l'instant $s+t$. On arrive au même point, parce que les deux trajets suivent la même courbe intégrale (unicité). Dans un champ dépendant du temps, l'instant de l'escale compte : il faut repartir **à l'instant $s$**, pas à l'instant $0$ — c'est pour cela que le flot global a trois arguments.

C'est la version « dépendant du temps » de la propriété de groupe $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$ du cas autonome ([[ch07-groupe-un-parametre]]). Le fond de la preuve : la courbe intégrale maximale $u\mapsto F(t_0,u,x)$ passe par $(s,y)$ ; c'est donc **aussi** la courbe intégrale maximale de condition initiale $(s,y)$, c'est-à-dire $u\mapsto F(s,u,y)$ — même courbe, même intervalle de définition. On conclut en évaluant en $u=s+t$.

Notations ([[ch07-flot-global-def]]) : $X : I\times U\to E$ est un champ de vecteurs dépendant du temps, localement lipschitzien en la seconde variable ; $J_{t_0}(x)$ est l'intervalle de définition de la courbe intégrale maximale $\alpha_{t_0,x}$ de condition initiale $(t_0,x)$ ([[ch07-courbe-integrale-maximale-def]]) ; $F(t_0,t,x)=\alpha_{t_0,x}(t)$ pour $t\in J_{t_0}(x)$, c'est-à-dire $(t_0,t,x)\in D$.

## Énoncé

**Théorème (poly, Théorème VII.3.7, p. 135).** Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps sur un ouvert $U$ d'un espace de Banach $E$, localement lipschitzien en la seconde variable, et $F : D\to U$ son flot global. Soit $(t_0,x)\in I\times U$. Supposons que $s$ et $s+t$ soient dans $J_{t_0}(x)$. Alors $F(s,s+t,F(t_0,s,x))$ est défini et
$$
F(t_0,s+t,x)=F\big(s,\,s+t,\,F(t_0,s,x)\big).
$$

*Complément (démontré dans la preuve).* Si $s\in J_{t_0}(x)$ et $y=F(t_0,s,x)$, alors $J_s(y)=J_{t_0}(x)$ et $\alpha_{s,y}=\alpha_{t_0,x}$ : la courbe intégrale maximale passant par $(t_0,x)$ et celle passant par $(s,y)$ sont la même courbe.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Assure l'unicité globale ([[ch07-unicite-globale]]), donc l'existence du flot global, et c'est l'unicité qui identifie les deux trajets.

**Si on la retire.** Le flot n'est plus défini ([[ch07-peano-non-unicite]]). Même en choisissant une solution par condition initiale, la formule peut tomber en défaut : pour $\alpha'=2\abs\alpha^{1/2}$ sur $\R$, choisissons pour $(0,0)$ la solution nulle et pour $(1,0)$ la solution $u\mapsto\operatorname{signe}(u-1)(u-1)^2$. Avec $t_0=0$, $s=1$, $t=1$ : « $F(0,2,0)$ » $=0$ mais « $F(1,2,F(0,1,0))=F(1,2,0)$ » $=1$.

### H2 — $s\in J_{t_0}(x)$

**Rôle.** Nécessaire pour que le point d'escale $F(t_0,s,x)$ soit défini.

**Si on la retire.** Pour $\alpha'=\alpha^2$, $t_0=0$, $x=1$ : $J_0(1)=\,]-\infty\,;1[$ et $F(0,1,1)$ n'existe pas ; aucune escale à l'instant $1$.

### H3 — $s+t\in J_{t_0}(x)$

**Rôle.** Nécessaire pour que le membre de gauche soit défini. La preuve montre que c'est alors suffisant pour le membre de droite ($J_s(y)=J_{t_0}(x)$) ; réciproquement, si le membre de droite est défini ($s\in J_{t_0}(x)$ et $s+t\in J_s(y)$), alors $s+t\in J_{t_0}(x)$ et la formule vaut.

**Si on la retire.** Pour $\alpha'=\alpha^2$, $t_0=0$, $x=1$, $s=\tfrac12$ : $y=F(0,\tfrac12,1)=2$ et $J_{1/2}(2)=\,]-\infty\,;1[=J_0(1)$. Pour $s+t=1$, aucun des deux membres n'est défini. L'hypothèse ne peut pas être affaiblie : les deux membres sont définis exactement pour les mêmes $t$.

## Idée de la preuve

$u\mapsto F(t_0,u,x)$ et $u\mapsto F(s,u,y)$ (avec $y=F(t_0,s,x)$) sont deux courbes intégrales maximales qui passent toutes deux par $(s,y)$ : par unicité et maximalité elles coïncident et ont le même intervalle de définition. Évaluer en $u=s+t$.

## Preuve

Soit $y=F(t_0,s,x)=\alpha_{t_0,x}(s)$, bien défini puisque $s\in J_{t_0}(x)$ (H2). Notons $J=J_{t_0}(x)$ et $J'=J_s(y)$ : ce sont des intervalles ouverts de $I$ contenant respectivement $t_0$ et $s$ ; de plus $s\in J$.

**$J\subset J'$ et $\alpha_{s,y}=\alpha_{t_0,x}$ sur $J$.** La courbe $\alpha_{t_0,x} : J\to U$ est une courbe intégrale de $X$ définie sur un intervalle ouvert contenant $s$, et elle vaut $y$ en $s$ : c'est donc une courbe intégrale de condition initiale $(s,y)$. Par définition de $J_s(y)$ comme réunion des intervalles ouverts contenant $s$ portant une telle courbe ([[ch07-courbe-integrale-maximale-def]]), $J\subset J'$. Par unicité globale ([[ch07-unicite-globale]], condition initiale $(s,y)$), $\alpha_{t_0,x}$ et $\alpha_{s,y}$ coïncident sur $J\cap J'=J$.

**$J'\subset J$.** Comme $t_0\in J\subset J'$ et que $\alpha_{s,y}=\alpha_{t_0,x}$ sur $J$, on a $\alpha_{s,y}(t_0)=\alpha_{t_0,x}(t_0)=x$ : la courbe $\alpha_{s,y} : J'\to U$ est une courbe intégrale de condition initiale $(t_0,x)$ définie sur un intervalle ouvert contenant $t_0$, donc $J'\subset J_{t_0}(x)=J$ par définition de $J_{t_0}(x)$.

Ainsi $J_s(y)=J_{t_0}(x)$ et $\alpha_{s,y}=\alpha_{t_0,x}$ (complément de l'énoncé). Par hypothèse (H3), $s+t\in J=J'$ : les deux membres de la formule sont définis et
$$
F(t_0,s+t,x)=\alpha_{t_0,x}(s+t)=\alpha_{s,y}(s+t)=F(s,s+t,y)=F\big(s,s+t,F(t_0,s,x)\big).\qquad\square
$$

*Lien avec la rédaction du poly.* Le poly résume : « les applications $t\mapsto F(t_0,s+t,x)$ et $t\mapsto F(s,s+t,F(t_0,s,x))$ vérifient la même équation différentielle avec même condition initiale $(0,F(t_0,s,x))$ ». En effet, après le changement de variable $u=s+t$, ces deux fonctions sont $\gamma_1(t)=\alpha_{t_0,x}(s+t)$ et $\gamma_2(t)=\alpha_{s,y}(s+t)$ ; toutes deux vérifient $\gamma'(t)=X(s+t,\gamma(t))$ (équation du champ translaté en temps $\tilde X(t,z)=X(s+t,z)$, encore localement lipschitzien en $z$) et $\gamma(0)=y$. L'unicité globale pour $\tilde X$ donne $\gamma_1=\gamma_2$ sur l'intersection de leurs domaines, et l'argument de maximalité ci-dessus montre que ces domaines sont égaux.

## Preuve à trous

Soit $y=F(t_0,s,x)$, $J=J_{t_0}(x)$, $J'=J_s(y)$. La courbe $\alpha_{t_0,x} : J\to U$ passe par $(s,y)$, donc c'est <trou indice="changer de condition initiale">une courbe intégrale de condition initiale $(s,y)$ ; par définition de $J_s(y)$ comme réunion, $J\subset J'$, et par unicité globale $\alpha_{t_0,x}=\alpha_{s,y}$ sur $J$</trou>. Réciproquement, <trou indice="évaluer $\alpha_{s,y}$ en $t_0$">$\alpha_{s,y}(t_0)=\alpha_{t_0,x}(t_0)=x$, donc $\alpha_{s,y}$ est une courbe intégrale de condition initiale $(t_0,x)$ et $J'\subset J$</trou>. D'où $J_s(y)=J_{t_0}(x)$ et $\alpha_{s,y}=\alpha_{t_0,x}$. Comme $s+t\in J$, <trou indice="conclure">$F(t_0,s+t,x)=\alpha_{t_0,x}(s+t)=\alpha_{s,y}(s+t)=F(s,s+t,F(t_0,s,x))$</trou>. $\square$

## Exemples

**Exemple 1 ($\alpha'=\alpha^2$, en notation à trois arguments).** $F(t_0,t,x)=\dfrac{x}{1-(t-t_0)x}$ sur $D=\{(t-t_0)x<1\}$ ([[ch07-flot-global-def]]). Membre de gauche : $F(t_0,s+t,x)=\dfrac{x}{1-(s+t-t_0)x}$. Membre de droite : $y=F(t_0,s,x)=\dfrac{x}{1-(s-t_0)x}$ puis
$$
F(s,s+t,y)=\frac{y}{1-ty}=\frac{\dfrac{x}{1-(s-t_0)x}}{1-\dfrac{tx}{1-(s-t_0)x}}=\frac{x}{1-(s-t_0)x-tx}=\frac{x}{1-(s+t-t_0)x}.
$$
Les deux membres coïncident.

**Exemple 2 (champ dépendant du temps : $\alpha'=\alpha+t$).** $F(t_0,t,x)=(x+t_0+1)e^{t-t_0}-t-1$ sur $D=\R^3$ ([[ch07-flot-global-def]], exemple 3). Membre de gauche : $(x+t_0+1)e^{s+t-t_0}-(s+t)-1$. Membre de droite : $y=(x+t_0+1)e^{s-t_0}-s-1$, donc $y+s+1=(x+t_0+1)e^{s-t_0}$ et
$$
F(s,s+t,y)=(y+s+1)e^{t}-(s+t)-1=(x+t_0+1)e^{s-t_0}e^{t}-(s+t)-1 ,
$$
égal au membre de gauche. Noter qu'il était essentiel de repartir de $y$ **à l'instant $s$** : $F(0,t,y)=(y+1)e^t-t-1$ donnerait un autre résultat.

**Exemple 3 (équation linéaire scalaire : Chasles).** Pour $\alpha'=a(t)\alpha$ avec $a : I\to\R$ continue, $F(t_0,t,x)=x\exp\Big(\displaystyle\int_{t_0}^ta(u)\,du\Big)$, $D=I\times I\times\R$. La formule de composition est exactement la relation de Chasles $\int_{t_0}^{s+t}a=\int_{t_0}^sa+\int_s^{s+t}a$ :
$$
F\big(s,s+t,F(t_0,s,x)\big)=x\,e^{\int_{t_0}^sa}\,e^{\int_s^{s+t}a}=x\,e^{\int_{t_0}^{s+t}a}=F(t_0,s+t,x).
$$

## Pièges

* > ⚠️ L'instant de l'escale est un instant **absolu** : le membre de droite est $F(s,s+t,\cdot)$, pas $F(0,t,\cdot)$ ni $F(s,t,\cdot)$. Seul le cas autonome permet de ne retenir que les durées ([[ch07-groupe-un-parametre]]).
* Vérifier d'abord $s\in J_{t_0}(x)$ (le point d'escale existe), puis $s+t\in J_{t_0}(x)$ ; la définition du membre de droite en découle, il n'y a rien d'autre à vérifier.
* Le complément $J_s(F(t_0,s,x))=J_{t_0}(x)$ est utile en soi : tous les points d'une même courbe intégrale maximale (avec leurs instants) ont le **même** intervalle de définition. Ne pas le confondre avec le cas autonome où, en ramenant la condition initiale à l'instant $0$, l'intervalle est **translaté** : $J(\alpha(t_1))=J(x_0)-t_1$ ([[ch07-translation-temps-autonome]]).
* Avec $t\leftarrow s-t$ on obtient l'inversibilité $F(t,s,F(s,t,x))=x$ ([[ch07-flot-inverse]]) ; avec l'hypothèse $|s|<2\epsilon_1$ d'un flot local, c'est l'étape clé de la preuve de l'ouverture de $D$ ([[ch07-flot-global-ouvert-regulier]]).
